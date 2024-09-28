
export async function POST(request) {
    try {
      const body = await request.json();
  
      const response = await fetch('https://adamdediev01.amocrm.ru/api/v4/leads/complex', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AMOCRM_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  
      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (error) {
      console.error('Error sending data to AmoCRM:', error);
      return new Response(JSON.stringify({ error: 'Failed to send data to AmoCRM' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  