type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h3>
        {
          props.isLoggedIn ? `Welcome, ${props.name}! You're ${props.messageCount} already` : `Welcome, guest! You've ${props.messageCount} unread messages`
        }
      </h3>
    </div>
  );
};
