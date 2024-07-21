const Header = ({ course }) => {
    return (
        <h1>{course}</h1>
    )
}

const Content = ({ part, exc }) => {
    return (
        <p>
            {part} {exc}
        </p>
    )
}

const Total = ({ exercises }) => {
    console.log()
    return (
        <>
            Number of exercises is {exercises.reduce((acc, curValue) => acc + curValue , 0)}
        </>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14



    return (
        <div>
            <Header course={course} />
            <Content
                part={part1}
                exc={exercises1}
            />
            <Content
                part={part2}
                exc={exercises2}
            />
            <Content
                part={part3}
                exc={exercises3}
            />
            <Total
                exercises={[exercises1, exercises2, exercises3]}
            />
        </div>
    )
}

export default App;