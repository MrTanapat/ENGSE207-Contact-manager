# 📋 API Contract - Contact Manager (Version 1.0)

## Response Standard
- **Success:** `{ "success": true, "data": <any>, "count": <number> }`
- **Error:** `{ "success": false, "error": "ข้อความ Error" }`

## Endpoints
- `GET /api/contacts` -> ดึงรายชื่อทั้งหมด
- `POST /api/contacts` -> เพิ่มรายชื่อใหม่ (JSON Body: name, email, phone)
- `DELETE /api/contacts/:id` -> ลบรายชื่อตาม ID
