import React, { useState } from 'react';

import './SellingForm.scss'

const CarSellingForm: React.FC = () => {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        year: 0,
        mileage: 0,
        condition: 'excellent',
        price: 0,
        contactfName: '',
        contactlName: '',
        contactEmail: '',
        contactPhone: '',
        description: '',
        image: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData({ ...formData, image: e.target.files[0] });
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Submit the form data, you can handle form submission logic here
        console.log(formData);
    };

    return (
        <div className='selling-form'>
            <form onSubmit={handleSubmit}>
                <h2>Car Info</h2>
                <div className="row">
                    <div>
                        <label htmlFor="brand">Brand:</label>
                        <input type="text" id="brand" name="brand" value={formData.brand} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="model">Model:</label>
                        <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} required />
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label htmlFor="year">Year:</label>
                        <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} required /><br />
                    </div>
                    <div>
                        <label htmlFor="mileage">Mileage:</label>
                        <input type="number" id="mileage" name="mileage" value={formData.mileage} onChange={handleChange} required /><br />
                    </div>
                </div>

                <label htmlFor="condition">Condition:</label>
                <select id="condition" name="condition" value={formData.condition} onChange={handleChange} required>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                </select><br />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required /><br />

                <label htmlFor="description">Description:</label><br />
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={4} cols={50} /><br />

                <label htmlFor="image">Upload Image:</label>
                <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} /><br />

                <h2>Seller Info</h2>
                <div className="row">
                    <div>
                        <label htmlFor="contactfName">Lastname:</label>
                        <input type="text" id="contactfName" name="contactfName" value={formData.contactfName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="contactlName">Firstname:</label>
                        <input type="text" id="contactlName" name="contactlName" value={formData.contactlName} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row">
                    <div>
                        <label htmlFor="contactPhone">Contact Phone:</label>
                        <input type="tel" id="contactPhone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="contactEmail">Contact Email:</label>
                        <input type="email" id="contactEmail" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required />
                    </div>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CarSellingForm;