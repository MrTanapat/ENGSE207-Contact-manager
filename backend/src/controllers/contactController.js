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
