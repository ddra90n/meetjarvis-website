import { clsx } from 'clsx'

export function LogoCloud({ className }) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between items-center max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="Spa"
        src="/logo-cloud/spa.png"
        className="h-12 w-auto object-contain max-sm:mx-auto sm:h-10 lg:h-14"
      />
      <img
        alt="Dentist"
        src="/logo-cloud/dentist.png"
        className="h-12 w-auto object-contain max-sm:mx-auto sm:h-10 lg:h-14"
      />
      <img
        alt="Hvac"
        src="/logo-cloud/hvac.png"
        className="h-12 w-auto object-contain max-sm:mx-auto sm:h-10 lg:h-14"
      />
      <img
        alt="Roofer"
        src="/logo-cloud/roofer.png"
        className="h-12 w-auto object-contain max-sm:mx-auto sm:h-10 lg:h-14"
      />
      <img
        alt="Landscaper"
        src="/logo-cloud/landscaper.png"
        className="h-12 w-auto object-contain max-sm:mx-auto sm:h-10 lg:h-14"
      />
    </div>
  )
}

