import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const roles = [
        {
            title: 'Admin',
            description: "The Admin (HOD) has complete control over the system. Can register faculty, monitor registered interns, and view all dashboards. Admin cannot edit any intern's data but access overall performance for auditing institutional review.",
            path: '/login/admin',
            buttonColor: 'bg-[#1a2b4b] hover:bg-[#2c436b]', // Navy Blue
            buttonText: 'Login as Admin',
            textColor: 'text-[#1a2b4b]'
        },
        {
            title: 'Faculty',
            description: "Faculty members manage only their assigned interns. Can add interns under them, evaluate daily activities (OPD, Surgery, Academics, Wet Lab), give marks (0-5), write remark if score <3, track improvements. Faculty do not have access to other faculty's interns.",
            path: '/login/faculty',
            buttonColor: 'bg-[#1b4d3e] hover:bg-[#2d705a]', // Dark Green
            buttonText: 'Login as Faculty',
            textColor: 'text-[#1b4d3e]'
        },
        {
            title: 'Intern',
            description: "Interns can log in to view only their own evaluations. Interns can check daily scores, remarks, feedback, and progress across the four modules. Interns cannot edit marks, but can view their final emailed report, which is also sent to them.",
            path: '/login/student',
            buttonColor: 'bg-[#a07436] hover:bg-[#bd8b45]', // Gold/Bronze
            buttonText: 'Login as Intern',
            textColor: 'text-[#a07436]'
        } // Mapped 'Intern' UI to 'Student' route
    ];

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center font-sans">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/college_bg.jpg"
                    alt="SDM Medical College"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* Header Section */}
                <div className="text-center mb-16 md:mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md">
                        SDM Medical College Dharwad
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white drop-shadow-md">
                        PG Assessment Tool
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                    {roles.map((role) => (
                        <div
                            key={role.title}
                            className="relative group bg-white/25 backdrop-blur-lg border border-white/30 rounded-xl p-8 flex flex-col items-center text-center shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/35 hover:shadow-blue-900/50"
                        >
                            <h3 className={`text-4xl font-bold mb-6 ${role.textColor} drop-shadow-sm`}>
                                {role.title}
                            </h3>

                            <p className="text-gray-900 text-sm md:text-[15px] leading-relaxed mb-8 flex-grow font-medium text-justify">
                                {role.description}
                            </p>

                            <button
                                onClick={() => navigate(role.path)}
                                className={`${role.buttonColor} text-white text-lg font-semibold py-3 px-8 rounded-md w-full transition-all duration-300 shadow-lg transform group-hover:translate-y-[-2px] hover:shadow-xl`}
                            >
                                {role.buttonText}
                            </button>

                            {/* Decorative gradient blur at bottom for "premium" feel */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
