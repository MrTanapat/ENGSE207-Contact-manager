<<<<<<< HEAD
// เพิ่มที่ต้นไฟล์
const MAX_NAME_LENGTH = 50;

// ใน createContact - เพิ่ม validation ก่อน INSERT
const trimmedName = name.trim();

if (trimmedName.length > MAX_NAME_LENGTH) {
  return res.status(400).json({
    success: false,
    error: `ชื่อต้องไม่เกิน ${MAX_NAME_LENGTH} ตัวอักษร (ปัจจุบัน ${trimmedName.length} ตัวอักษร)`,
  });
}
=======
// ============================================
// Contact Controller
// Developer: สมหญิง (Backend Dev)
// Version: 1.0 (มี Bug!)
// ⚠️ Bug: ไม่ได้ validate ความยาว name!
// ============================================

const pool = require('../database/db');

exports.getAllContacts = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM contacts ORDER BY created_at DESC'
        );
        res.json({
            success: true,
            data: result.rows,
            count: result.rows.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'ไม่สามารถดึงข้อมูลได้'
        });
    }
};

exports.createContact = async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        if (!name || name.trim() === '') {
            return res.status(400).json({
                success: false,
                error: 'กรุณาระบุชื่อ'
            });
        }

        const result = await pool.query(
            'INSERT INTO contacts (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
            [name, email, phone]
        );

        res.status(201).json({
            success: true,
            data: result.rows[0]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'ไม่สามารถเพิ่มข้อมูลได้'
        });
    }
};
>>>>>>> e54552b0155dd60a87b974303e632de509b74548
