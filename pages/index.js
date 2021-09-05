import useAuth from "./../hooks/useAuth";

export default function Home() {
  const { user, signin } = useAuth();

  return (
    <div>
      <h1>clocker</h1>
    </div>
  );
}
