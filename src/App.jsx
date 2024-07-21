const Header = ({ course }) => {
    return (
        <h1>{course}</h1>
    )
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}

const Total = ({ exercises }) => {
    return (
        <>
            Number of exercises is {exercises.reduce((acc, curValue) => acc + curValue.exercises , 0)}
        </>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]



    return (
        <div>
            <Header course={course} />
            {parts.map((part, ind) => {
                return (<Part
                    part={part}
                    key={ind}
                />)
            })}
            <Total
                exercises={parts}
            />
        </div>
    )
}

export default App;