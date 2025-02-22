import React from 'react';

interface Job {
    company: string;
    title: string;
    status: string;
    date_applied: string;
}

interface JobCardProps {
    jobs: Job[];
    onStatusUpdate: (index: number, newStatus: string) => void;
    onDelete: (index: number) => void;
}

const JobCard: React.FC<JobCardProps> = ({ jobs, onStatusUpdate, onDelete }) => {
    return (
        <div className="flex flex-col gap-4 w-70 p-2">
            {jobs.map((job, index) => (
                <div key={index} className="border border-gray-400 rounded-lg p-4 shadow-lg bg-white">
                    <h2 className="text-gray-700 text-lg font-bold mb-2">{job.company}</h2>
                    <p className="text-gray-700 mb-1"><strong>Title:</strong> {job.title}</p>
                    <p 
                        className="text-gray-700 cursor-pointer mb-1"
                        onClick={() => onStatusUpdate(index, prompt('Update status:', job.status) || job.status)}
                    >
                        <strong>Status:</strong> {job.status}
                    </p>
                    <p className="text-gray-700 mb-3"><strong>Date Applied:</strong> {job.date_applied}</p>
                    <button
                        className="bg-red-500 text-white flex px-3 py-1 rounded"
                        onClick={() => onDelete(index)}
                    >
                        Delete
                    </button>
                    
                </div>
            ))}
        </div>
    );
};

export default JobCard;
