export type ProfileProps = {
  name: string;
};

export const Profile = (props: ProfileProps) => {
  return <div>Private Profile component. Name's {props.name}</div>;
};
