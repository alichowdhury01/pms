import PatientForm from '@/components/forms/PatientForm';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import dayjs from 'dayjs';
import Link from 'next/link';

const year = dayjs().year();

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TO DO: OTP VERIFICATION */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              &copy; {year} Care Pulse. All rights reserved.
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src={'/assets/images/onboarding-img.png'}
        alt={'patient'}
        height={1000}
        width={1000}
        className="side-image max-w-[50%]"
      />
    </div>
  );
}
