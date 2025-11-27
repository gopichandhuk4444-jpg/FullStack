import { useState, useRef, useImperativeHandle } from "react";


const Child = ({ ref }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useImperativeHandle(ref, () => ({
    triggerSubmit: () => {
      const hasErrors = Object.values(errors).some((err) => err !== "");
      const hasEmptyFields =
        !formData.name || !formData.phone || !formData.email;

      if (hasErrors) {
        alert("Please fix the errors before submitting.");
        return;
      }
      if (hasEmptyFields) {
        alert("All fields are required.");
        return;
      }
      if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/.test(formData.email)){
        alert("valid email is required.");
        return;
      }
      alert(`Form Submitted!\nName: ${formData.name}\nPhone: ${formData.phone}`);
    },
  }));

  const handleNameChange = (e) => {
  const val = e.target.value.trimStart();
    
    if (!/^[a-zA-Z\s]*$/.test(val)) {
      setErrors((prev) => ({ ...prev, name: "Invalid Name" }));
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
      setFormData({ ...formData, name: val });
    }
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    if (!/^[0-9]*$/.test(val)) {
      setErrors((prev) => ({ ...prev, phone: "Invalid phone: Numbers only" }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
      setFormData({ ...formData, phone: val });
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    
    if (!/^[a-z0-9@.]*$/.test(val)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
      setFormData({ ...formData, email: val });
    }
  };

  return (
    <div>
      {/* Form Group: Name */}
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleNameChange}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      {/* Form Group: Phone */}
      <div className="form-group">
        <input
          className="form-input"
          placeholder="Phone "
          value={formData.phone}
          onChange={handlePhoneChange}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      {/* Form Group: Email */}
      <div className="form-group">
        <input
          className="form-input"
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={handleEmailChange}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
    </div>
  );
};

export const Parent = () => {
  const childRef = useRef(null);

  const handleParentSubmit = () => {
    if (childRef.current) {
      childRef.current.triggerSubmit();
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">User Details</h1>
      
      <Child ref={childRef} />
      
      {/* Note: I removed the <br /> as CSS handles spacing now */}
      <button className="submit-btn" onClick={handleParentSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Parent;