"use client"
import React, { useState } from 'react';
import JobCard from './components/JobCard';
import SearchBar from './components/SearchBar';
import jobsData from './data/jobs.json';
import { IoFilter } from "react-icons/io5";

interface Job {
    id: number;
    title: string;
    company: string;
    status: string;
    date_applied: string;
}

const Page: React.FC = () => {
    const [jobs, setJobs] = useState<Job[]>(jobsData);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobsData);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [filterVisible, setFilterVisible] = useState<boolean>(false);

    const handleSearch = (query: string) => {
        const lowerCaseQuery = query.toLowerCase();
        setFilteredJobs(
            jobs.filter(
                (job) =>
                    job.company.toLowerCase().includes(lowerCaseQuery) ||
                    job.title.toLowerCase().includes(lowerCaseQuery)
            )
        );
    };

    const handleStatusFilter = (status: string) => {
        setFilteredJobs(jobs.filter((job) => job.status === status));
    };

    const handleSortByDate = () => {
        const sortedJobs = [...filteredJobs].sort((a, b) => {
            return sortOrder === 'asc'
                ? new Date(a.date_applied).getTime() - new Date(b.date_applied).getTime()
                : new Date(b.date_applied).getTime() - new Date(a.date_applied).getTime();
        });
        setFilteredJobs(sortedJobs);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleStatusUpdate = (index: number, newStatus: string) => {
        const updatedJobs = [...jobs];
        updatedJobs[index].status = newStatus;
        setJobs(updatedJobs);
        setFilteredJobs(updatedJobs);
    };

    const handleDelete = (index: number) => {
        const updatedJobs = jobs.filter((_, i) => i !== index);
        setJobs(updatedJobs);
        setFilteredJobs(updatedJobs);
    };

    return (
        <div className="container mx-auto p-4 w-full">
            <h1 className="text-2xl font-bold mb-4">Job Application Tracker</h1>
            <SearchBar onSearch={handleSearch} />
            <div className="relative mb-4">
                <IoFilter className="text-black cursor-pointer" onClick={() => setFilterVisible(!filterVisible)} />
                {filterVisible && (
                    <div className="absolute bg-white border rounded shadow-lg p-4 mt-2 w-48">
                        <div className="flex flex-col gap-2">
                            <button className="text-blue-500" onClick={() => handleStatusFilter('Interviewing')}>Interviewing</button>
                            <button className="text-green-500" onClick={() => handleStatusFilter('Offer Received')}>Offer Received</button>
                            <button className="text-gray-500" onClick={handleSortByDate}>Sort by Date ({sortOrder})</button>
                        </div>
                    </div>
                )}
            </div>
            <JobCard jobs={filteredJobs} onStatusUpdate={handleStatusUpdate} onDelete={handleDelete} />
        </div>
    );
};

export default Page;
