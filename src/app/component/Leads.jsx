'use client'
import { useState } from 'react';

function LeadForm() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Создайте объект данных, которые вы хотите отправить
    const leadData = [
      {
        "source_uid": "228",
        "source_name": "website",
        "metadata": {
          "form_id": "checkout_uid",
          "form_name": "Форма оформления заказа",
          "form_page": "Интернет-магазин (покупка)",
          "ip": "192.168.1.1",
          "form_sent_at": Date.now() / 1000, // Время отправки в формате UNIX
          "referer": document.referrer
        },
        "_embedded": {
          "leads": [
            {
              "name": "Покупка с сайта",
              "price": 123132
            }
          ],
          "contacts": [
            {
              "name": "сделка рабоатет",
              "first_name": "Дедиев",
              "last_name": "example",
              "custom_fields_values": [
                {
                  "field_id": 106233,
                  "field_name": "Телефон",
                  "field_code": "PHONE",
                  "field_type": "multitext",
                  "values": [
                    {
                      "value": phone,
                      "enum_id": 58771,
                      "enum_code": "WORK"
                    }
                  ]
                },
                {
                  "field_id": 106235,
                  "field_name": "Email",
                  "field_code": "EMAIL",
                  "field_type": "multitext",
                  "values": [
                    {
                      "value": email,
                      "enum_id": 58783,
                      "enum_code": "WORK"
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ];

    // Отправка данных на серверную функцию
    const response = await fetch('/Reznov/api/sendToAmoCRM', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LeadForm;
