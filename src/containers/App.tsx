type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const App = ({ children }: Props) => (
  <div className="content-container">
    {children}
  </div>
);

export default App;