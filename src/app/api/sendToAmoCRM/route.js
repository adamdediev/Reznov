
export async function POST(request) {
    try {
      const body = await request.json();
  
      const response = await fetch('https://adamdediev01.amocrm.ru/api/v4/leads/complex', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk2OTRjMTE3YjQ0NGUzODZjYjhlMTkzYjRkNjU3YmIyYmMwNWIwYWRhNDM5YjdhZjQzMDJmNjlmZDdkNWVlNzc1MzU2ZWFkZjkwNWJiZjYwIn0.eyJhdWQiOiJlMjEzMDk5Mi1lNTEwLTRhMzEtYmQ5Yy01NjRmYTkzZTczMjYiLCJqdGkiOiI5Njk0YzExN2I0NDRlMzg2Y2I4ZTE5M2I0ZDY1N2JiMmJjMDViMGFkYTQzOWI3YWY0MzAyZjY5ZmQ3ZDVlZTc3NTM1NmVhZGY5MDViYmY2MCIsImlhdCI6MTcyNTgyNjgzMiwibmJmIjoxNzI1ODI2ODMyLCJleHAiOjE3MzEwMjQwMDAsInN1YiI6IjExMzM4NDU0IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTM5NjgyLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMDRiYWUxNGYtMDQwNC00MTMwLTlmODgtODQ0YjVkMGVmN2NmIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.F7GrKbD0GfDn5Vo64YBVptNDGXC09VkbFth50mQKm5sBJudLJe7y3gIXSjZjAusqh5bs4QTVvRiK8PKL8uP1F5lg9_IzCI7CUXAD116bGPVHn7malWgXJ9NY-6b-F5ArKvEAiQ5i7P_sr5askiUyJeb53blxNDGt2APyZjTgpU71fuPrDoPA76QY52_4J96OxYbQsEPlRBmdJHr3NstXZtsbxUu2i9pNwFcsbHN8H9KhZFO6NzOAEOdk-ij5lwIBAw3lWw_j3DTE4xwhDiJEG4QVbnzXDC8HfmoMYOt0VCfZGIgFB0-OdHlZpdnn9jGv8zxYy9AgbtTyHVunAjLNyg',
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
  