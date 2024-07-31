"use client";

// Based on: https://dribbble.com/shots/22823385-AI-Powered-OCR-Software

import React, { useState } from 'react';
import { Menu } from "../../components/basic/Menu"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import './page.css';

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
            <main className="flex flex-col items-center justify-center p-24">
                <Menu> </Menu>
            </main>
            <div className="app">
                <div className="sidebar">
                    <div className="last-extraction-results">
                        <Tabs defaultValue="week">
                            <TabsContent value="week">
                                <Card x-chunk="dashboard-05-chunk-3">
                                    <CardHeader className="px-7">
                                        <CardTitle>Last Extraction Results</CardTitle>
                                        <CardDescription>
                                            Recent extractions
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Customer</TableHead>
                                                    <TableHead className="sm:table-cell">
                                                        Type
                                                    </TableHead>
                                                    <TableHead className="sm:table-cell">
                                                        Status
                                                    </TableHead>
                                                    <TableHead className="md:table-cell">
                                                        Date
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow className="bg-accent">
                                                    <TableCell>
                                                        <div className="font-medium">Credit Card Statement</div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            liam@example.com
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="sm:table-cell">
                                                        PNG
                                                    </TableCell>
                                                    <TableCell className="sm:table-cell">
                                                        <Badge className="text-xs" variant="secondary">
                                                            Processing
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="md:table-cell">
                                                        12.3 sec
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">Driver License</div>
                                                    </TableCell>
                                                    <TableCell className="sm:table-cell">
                                                        JPG
                                                    </TableCell>
                                                    <TableCell className="sm:table-cell">
                                                        <Badge className="text-xs" variant="outline">
                                                            Passed
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="md:table-cell">
                                                        15 sec
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>

                        <Tabs defaultValue="week">
                            <TabsContent value="week">
                                <Card x-chunk="dashboard-05-chunk-3">
                                    <CardHeader className="px-7">
                                        <CardTitle>Document Types</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Type</TableHead>
                                                    <TableHead className="sm:table-cell">
                                                        Code
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow className="bg-accent">
                                                    <TableCell>
                                                        <div className="font-medium">Invoice</div>
                                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                                            liam@example.com
                                                        </div>
                                                    </TableCell>
                                                    <TableCell className="sm:table-cell">
                                                        212
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">Passport</div>
                                                    </TableCell>
                                                    <TableCell className="sm:table-cell">
                                                        32
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">Bank Statement</div>
                                                    </TableCell>
                                                    <TableCell className="sm:table-cell">
                                                        12
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>
                                                        <div className="font-medium">Others</div>
                                                    </TableCell>
                                                    <TableCell className="sm:table-cell">
                                                        198
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <div className="main-content">
                    <div className="extract-document">

                        <Card x-chunk="dashboard-05-chunk-3">
                            <CardHeader className="px-7">
                                <CardTitle>Document Types</CardTitle>
                            </CardHeader>
                            <CardContent>
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
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};