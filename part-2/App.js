const App = () => (
  <div>
    <Tweet 
      username="flowergal"
      name="Flora Planter"
      date={new Date().toDateString()}
      message="Plants are so pretty!"
    />
    <Tweet 
      username="animalguy"
      name="Brian Wolff"
      date={new Date().toDateString()}
      message="Animals are amazing"
    />
    <Tweet 
      username="mountaingal"
      name="Judy Climber"
      date={new Date().toDateString()}
      message="Mountains are marvelous"
    />

  </div>
)

