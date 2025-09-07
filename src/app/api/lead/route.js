export async function POST(req) {
  try {
    const { name, phone } = await req.json();

    if (!phone) {
      return Response.json({ error: 'Phone is required' }, { status: 400 });
    }

    const leadName = name && name.trim() ? name.trim() : 'Не указано';

    const webhookBase = process.env.BITRIX_WEBHOOK_URL;
    if (!webhookBase) {
      return Response.json({ error: 'BITRIX_WEBHOOK_URL not set' }, { status: 500 });
    }

    const url = webhookBase.endsWith('/')
      ? `${webhookBase}crm.lead.add.json`
      : `${webhookBase}/crm.lead.add.json`;

    const payload = {
      fields: {
        TITLE: `Заявка с сайта Reznov`,
        NAME: leadName,
        PHONE: [{ VALUE: phone, VALUE_TYPE: 'WORK' }],
      },
      params: { REGISTER_SONET_EVENT: 'Y' },
    };

    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await r.json();

    if (!r.ok || data.error) {
      return Response.json(
        { error: data.error_description || data.error || 'Bitrix error', details: data },
        { status: 502 }
      );
    }

    return Response.json({ success: true, result: data.result ?? data });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
