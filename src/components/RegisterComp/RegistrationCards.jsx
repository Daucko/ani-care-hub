import { HoverEffect } from './HoverEffect';

export function RegistrationCards({ projects }) {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
