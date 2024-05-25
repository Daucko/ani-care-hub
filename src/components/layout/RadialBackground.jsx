import RadialGradient from '../../ui/RadialGradient';
import DashHome from '../DocDashboard/DashHome';

export function RadialBackground({ name, image }) {
  return (
    <div className="">
      <DashHome name={name} image={image} />
      <RadialGradient />
    </div>
  );
}
