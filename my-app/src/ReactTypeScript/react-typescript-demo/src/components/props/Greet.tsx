type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;

  return (
    <div>
      <h3>
        {
          props.isLoggedIn ? `Welcome, ${props.name}! You're ${messageCount} already` : `Welcome, guest! You've ${messageCount} unread messages`
        }
      </h3>
    </div>
  );
};
