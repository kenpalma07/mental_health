import * as React from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Consulatations',
    href: '/patients/addConsultations',
  },
];

const PatientIndex: React.FC = () => {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Patients" />
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-semibold">Hello Patient List here</h1>
        {/* Add more content here later */}
      </div>
    </AppLayout>
  );
};

export default PatientIndex;
