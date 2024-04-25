import React, { useState } from 'react';
import axios from 'axios';
import './SellingForm.scss'

const CarSellingForm: React.FC = () => {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        year: 0,
        mileage: 0,
        engine: '',
        gearbox: '',
        fueltype: 'Gasoline',
        condition: 'Excellent',
        price: 0,
        contactfName: '',
        contactlName: '',
        contactEmail: '',
        contactPhone: '',
        description: '',
        image: null as File | null,
    });

    const clearForm = () => {
        setFormData({
          brand: '',
          model: '',
          year: 0,
          mileage: 0,
          engine: '',
          gearbox: '',
          fueltype: 'Gasoline',
          condition: 'Excellent',
          price: 0,
          contactfName: '',
          contactlName: '',
          contactEmail: '',
          contactPhone: '',
          description: '',
          image: null,
        });
      };

      const [errorMessage, setErrorMessage] = useState('');
      const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setFormData({ ...formData, image: e.target.files[0] });
        }
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
          // Extract user data from form data
          const { contactfName, contactlName, contactEmail, contactPhone, ...carData } = formData;
    
          // Make POST request to create user
          const userResponse = await axios.post('http://localhost:5000/api/users', {
            contactfName: contactfName,
            contactlName: contactlName,
            contactEmail: contactEmail,
            contactPhone: contactPhone,
          });
          
          const userId = userResponse.data.userId;

    
          // Make POST request to create car
          const carResponse = await axios.post('http://localhost:5000/api/cars', {
            ...carData,
            userId: userId,
          });

          
        // Clear the form fields after successful submission
        clearForm();
    
          console.log(carResponse.data);
          // Optionally, redirect or show a success message
          setSuccessMessage('Form submitted successfully!');
        } catch (error) {
          console.error('Error:', error);
          // Handle error
          setErrorMessage('Failed to submit form. Please try again later.');
        }
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

                <div className="row">
                    <div>
                        <label htmlFor="engine">Engine:</label>
                        <input type="text" id="engine" name="engine" value={formData.engine} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="gearbox">Gearbox:</label>
                        <input type="text" id="gearbox" name="gearbox" value={formData.gearbox} onChange={handleChange} required />
                    </div>
                </div>

                <label htmlFor="fueltype">Fueltype:</label>
                <select id="fueltype" name="fueltype" value={formData.fueltype} onChange={handleChange} required>
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Hybrid">Plug-in Hybrid</option>
                    <option value="Electric">Electric</option>
                </select><br />

                <label htmlFor="condition">Condition:</label>
                <select id="condition" name="condition" value={formData.condition} onChange={handleChange} required>
                    <option value="New">New</option>
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Repair">Repair Needed</option>
                </select><br />

                <label htmlFor="price">Price:</label>
                <input type="currency" id="price" name="price" step="any" value={formData.price} onChange={handleChange} required /><br />

                <label htmlFor="description">Description:</label><br />
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={4} cols={50} /><br />

                <label htmlFor="image">Upload Image:</label>
                <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} /><br />

                <h2>Seller Info</h2>
                <div className="row">
                    <div>
                        <label htmlFor="contactfName">Firstname:</label>
                        <input type="text" id="contactfName" name="contactfName" value={formData.contactfName} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="contactlName">Lastname:</label>
                        <input type="text" id="contactlName" name="contactlName" value={formData.contactlName} onChange={handleChange} required />
                    </div>
                </div>

                <div className="row">
                    <div>
                        <label htmlFor="contactPhone">Phone:</label>
                        <input type="tel" id="contactPhone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="contactEmail">Email:</label>
                        <input type="email" id="contactEmail" name="contactEmail" value={formData.contactEmail} onChange={handleChange} required />
                    </div>
                </div>

                <input type="submit" value="Submit" />
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                {successMessage && <div className="success-message">{successMessage}</div>}
            </form>
        </div>
    );
};

export default CarSellingForm;