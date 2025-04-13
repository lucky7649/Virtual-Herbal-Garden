import React, { useState } from 'react';

const Setting = () => {
    const [activeSetting, setActiveSetting] = useState(null);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailPassword, setEmailPassword] = useState('');
    const [privacy, setPrivacy] = useState(false);
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);
    const [isEmailChanged, setIsEmailChanged] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [pushNotifications, setPushNotifications] = useState(false);

    // Error state for form validation
    const [formErrors, setFormErrors] = useState({
        currentPassword: '',
        newPassword: '',
        reenterPassword: '',
        email: '',
        emailPassword: ''
    });

    const handleSettingClick = (setting) => {
        setActiveSetting(setting === activeSetting ? null : setting); // Toggle visibility of the form
    };

    const validatePassword = () => {
        const errors = {};
        if (!currentPassword) errors.currentPassword = 'Current password is required.';
        if (!newPassword) errors.newPassword = 'New password is required.';
        if (newPassword && !reenterPassword) errors.reenterPassword = 'Please re-enter the new password.';
        if (newPassword !== reenterPassword) errors.reenterPassword = 'Passwords do not match.';
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChangePassword = () => {
        if (validatePassword()) {
            setIsPasswordChanged(true);
            alert('Password changed successfully!');
        }
    };

    const validateEmail = () => {
        const errors = {};
        // Simple email regex for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            errors.email = 'Email is required.';
        } else if (!emailRegex.test(email)) {
            errors.email = 'Invalid email format.';
        }

        if (!emailPassword) {
            errors.emailPassword = 'Email password is required.';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChangeEmail = () => {
        if (validateEmail()) {
            setIsEmailChanged(true);
            alert(`Email changed to: ${email}`);
        }
    };

    const handleTogglePrivacy = () => {
        setPrivacy(!privacy);
    };

    const handleToggleEmailNotifications = () => {
        setEmailNotifications(!emailNotifications);
    };

    const handleTogglePushNotifications = () => {
        setPushNotifications(!pushNotifications);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h2>
                {/* Account Settings Section */}
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">Account Settings</h3>
                    <ul className="text-gray-600">
                        <li className="cursor-pointer hover:text-blue-600 p-2 mb-2 font-semibold text-black" onClick={() => handleSettingClick('changePassword')}>
                            Change Password
                        </li>
                        <li className="cursor-pointer hover:text-blue-600 p-2 mb-2 font-semibold text-black" onClick={() => handleSettingClick('changeEmail')}>
                            Change Email
                        </li>
                        <li className="cursor-pointer hover:text-blue-600 p-2 mb-2 font-semibold text-black" onClick={() => handleSettingClick('managePrivacy')}>
                            Manage Privacy
                        </li>
                        <li className="cursor-pointer hover:text-blue-600 p-2 mb-2 font-semibold text-black" onClick={() => handleSettingClick('notifications')}>
                            Notifications
                        </li>
                    </ul>
                </div>

                {/* Change Password Form */}
                {activeSetting === 'changePassword' && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">Change Password</h3>
                        <div className="space-y-4">
                            <input type="password" placeholder="Current Password" className="w-full p-2 border border-gray-300 rounded-lg" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                            {formErrors.currentPassword && (
                                <p className="text-red-500 text-sm">{formErrors.currentPassword}</p>
                            )}
                            <input type="password" placeholder="New Password" className="w-full p-2 border border-gray-300 rounded-lg" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            {formErrors.newPassword && (
                                <p className="text-red-500 text-sm">{formErrors.newPassword}</p>
                            )}
                            <input type="password" placeholder="Re-enter New Password" className="w-full p-2 border border-gray-300 rounded-lg" value={reenterPassword} onChange={(e) => setReenterPassword(e.target.value)} />
                            {formErrors.reenterPassword && (
                                <p className="text-red-500 text-sm">{formErrors.reenterPassword}</p>
                            )}
                            <button onClick={handleChangePassword} className="w-full bg-blue-500 text-white py-2 rounded-lg">
                                Change Password
                            </button>
                            {isPasswordChanged && (
                                <p className="text-green-500 text-sm mt-2">Password changed successfully!</p>
                            )}
                        </div>
                    </div>
                )}

                {/* Change Email Form */}
                {activeSetting === 'changeEmail' && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">Change Email</h3>
                        <div className="space-y-4">
                            <input type="email" placeholder="New Email" className="w-full p-2 border border-gray-300 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {formErrors.email && (
                                <p className="text-red-500 text-sm">{formErrors.email}</p>
                            )}
                            <input type="password" placeholder="Email Password" className="w-full p-2 border border-gray-300 rounded-lg" value={emailPassword} onChange={(e) => setEmailPassword(e.target.value)} />
                            {formErrors.emailPassword && (
                                <p className="text-red-500 text-sm">{formErrors.emailPassword}</p>
                            )}
                            <button onClick={handleChangeEmail} className="w-full bg-blue-500 text-white py-2 rounded-lg">
                                Change Email
                            </button>
                            {isEmailChanged && (
                                <p className="text-green-500 text-sm mt-2">Email changed successfully!</p>
                            )}
                        </div>
                    </div>
                )}

                {/* Manage Privacy Settings */}
                {activeSetting === 'managePrivacy' && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">Privacy Settings</h3>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm text-gray-600">Profile Visibility</span>
                            <button onClick={handleTogglePrivacy} 
                                    className={`py-2 px-4 font-semibold rounded-lg ${privacy ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}>
                                {privacy ? 'Disable Profile' : 'Enable Profile'}
                            </button>
                        </div>
                    </div>
                )}

                {/* Notifications Settings */}
                {activeSetting === 'notifications' && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
                        <div className="flex flex-col space-y-4 mt-4">
                            {/* Email Notifications */}
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Email Notifications</span>
                                <button onClick={handleToggleEmailNotifications} 
                                        className={`py-2 px-4 font-semibold rounded-lg ${emailNotifications ? 'bg-blue500 text-white' : 'bg-gray300 text-black'}`}>
                                    {emailNotifications ? 'Disable Email Notifications' : 'Enable Email Notifications'}
                                </button>
                            </div>

                            {/* Push Notifications */}
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray600">Push Notifications</span>
                                <button onClick={handleTogglePushNotifications} 
                                        className={`py-2 px-4 font-semibold rounded-lg ${pushNotifications ? 'bg-blue500 text-white' : 'bg-gray300 text-black'}`}>
                                    {pushNotifications ? 'Disable Push Notifications' : 'Enable Push Notifications'}
                                </button>
                            </div>
                        </div> {/* End of Notifications Settings */}
                    </div> 
                )}
            </div> {/* End of Main Container */}
        </div>
    );
};

export default Setting;