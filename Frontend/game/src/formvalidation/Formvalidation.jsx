import React, { useState, useEffect, useRef } from 'react';

const ChildForm = ({ registerSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const validateAndSubmit = () => {
    let newErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;

    if (!nameRegex.test(formData.fullName)) {
      newErrors.fullName = 'Invalid Name';
    }
    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Invalid Mobile Number';
    }
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid Email';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(formData);
    }
  };

  useEffect(() => {
    registerSubmit(validateAndSubmit);
  }, []);

  return (
    <div>
      <div>
        <input
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
        <span>{errors.fullName}</span>
      </div>
      
      <div>
        <input
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />
        <span>{errors.mobile}</span>
      </div>

      <div>
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <span>{errors.email}</span>
      </div>
    </div>
  );
};

export default function ParentComponent() {
  const submitRef = useRef(null);

  return (
    <div>
      <ChildForm registerSubmit={(fn) => (submitRef.current = fn)} />
      <button onClick={() => submitRef.current?.()}>
        Submit Form
      </button>
    </div>
  );
}