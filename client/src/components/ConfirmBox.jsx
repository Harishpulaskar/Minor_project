import React from "react";

export default function ConfirmBox({ title, message, onConfirm, onCancel }) {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center">

            <div className="bg-white rounded-2xl shadow-2xl w-[420px] animate-modalPop">

                {/* Header */}
                <div className="px-6 pt-6 text-center">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <p className="text-gray-600 mt-2">{message}</p>
                </div>

                {/* Divider */}
                <div className="border-t mt-6" />

                {/* Buttons */}
                <div className="flex justify-end gap-3 px-6 py-4">
                    <button
                        onClick={onCancel}
                        className="px-5 py-2 border rounded-xl font-semibold"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-5 py-2 bg-red-600 text-white rounded-xl font-semibold shadow-md hover:bg-red-700"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
