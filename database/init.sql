-- Contact Manager Database Schema
CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed Data
INSERT INTO contacts (name, email, phone) VALUES 
    ('Somchai Jaidee', 'somchai@email.com', '081-234-5678'),
    ('Somying Rakrean', 'somying@email.com', '089-876-5432'),
    ('John Doe', 'john@email.com', '02-123-4567');
