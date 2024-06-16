"use client";

// Based on: https://dribbble.com/shots/22823385-AI-Powered-OCR-Software

import React, { useState } from 'react';
import { Menu } from "../../components/Menu"
import './page.css'; // Include your CSS file

export default function OCR() {
    const [documentType, setDocumentType] = useState('Driver License (US)');
    const [processingMode, setProcessingMode] = useState('Highest Quality (Recommended)');

    const handleDocumentTypeChange = (event) => {
        setDocumentType(event.target.value);
    };

    const handleProcessingModeChange = (event) => {
        setProcessingMode(event.target.value);
    };

    const extractDocumentData = () => {
        // Add functionality to extract document data
        alert('Extract Document Data');
    };

    return (
        <div>
            <Menu> </Menu>
            <div className="app">
                <div className="sidebar">
                    <div className="last-extraction-results">
                        <h2>Last Extraction Results</h2>
                        <ul>
                            <li>Credit Card Statement.png - PROCESSING</li>
                            <li>Credit Card Statement.png - PASSED - 12.3 sec</li>
                            <li>Driver License Alex Terner DriverL.png - PASSED - 12.3 sec</li>
                        </ul>
                    </div>
                </div>
                <div className="main-content">
                    <div className="extract-document">
                        <h2>Extract Document</h2>
                        <div className="document-preview">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGMjOoOzo3DAV3ltRpuI97ImlLI1qg5pd0Q&s" alt="Driver License" />
                        </div>
                        <div className="document-settings">
                            <label>
                                Document Type
                                <select value={documentType} onChange={handleDocumentTypeChange}>
                                    <option value="Driver License (US)">Driver License (US)</option>
                                    <option value="Passport (US)">Passport (US)</option>
                                    <option value="Bank Statement">Bank Statement</option>
                                    <option value="Invoice">Invoice</option>
                                    <option value="Pay Stubs">Pay Stubs</option>
                                    <option value="Other">Other</option>
                                </select>
                            </label>
                            <label>
                                Processing Mode
                                <select value={processingMode} onChange={handleProcessingModeChange}>
                                    <option value="Highest Quality (Recommended)">Highest Quality (Recommended)</option>
                                    <option value="Fastest">Fastest</option>
                                </select>
                            </label>
                            <button onClick={extractDocumentData}>Extract Document Data</button>
                        </div>
                    </div>
                </div>
                <div className="document-types">
                    <h2>Document Types</h2>
                    <ul>
                        <li>Invoice - 212</li>
                        <li>Passport US - 32</li>
                        <li>Bank Statement - 12</li>
                        <li>Pay Stubs - 4</li>
                        <li>Other - 198</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};