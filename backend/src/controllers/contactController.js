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
