This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Dashboard Layout

  Display a list of job applications, each with:
  Job title
  Company name
  Status (e.g., "Applied," "Interviewing," "Rejected," "Offer Received")
  Application date
  Actions (Edit or Delete)

## Features & Functionalities

  Display Job Applications: 
    - Fetch job data from a static JSON file or mock API.
    - Display job applications using a table or card layout.

## Filtering & Sorting:

  - Search Bar: Filter job applications by title or company.
  - Filter Buttons: Filter by status (e.g., only "Interviewing" or "Offer Received").
  - Sort by Date Applied: Sort applications by the date they were submitted.
  - Interactive Status Update:Allow users to click on the status and update it (e.g., change "Applied" to     "Interviewing").
  - Delete Application: Each job entry should have a delete button to remove it from the list.
  - Responsive UI: Ensure the layout is mobile-friendly and adjusts well to different screen sizes.

## Obstacles and Struggles 

  Working on the Job Applications Dashboard was definitely an interesting challenge. Managing the state for features like filtering, sorting, and updating the job status was a bit tricky, especially as the data grew. Ensuring the dashboard remained responsive across all devices was also a bit of a headache, but with the right CSS techniques, I was able to keep the layout clean and user-friendly. A big part of the struggle was making sure that when users updated job statuses or deleted applications, those actions were saved properly, even after page reloads. It took some careful handling of local storage to make sure everything persisted as expected.
