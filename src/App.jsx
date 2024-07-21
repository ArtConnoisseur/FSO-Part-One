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
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }



    return (
        <div>
            <Header course={course} />
            <Part
                part={part1}
            /><Part
                part={part2}
            /><Part
                part={part3}
            />
            <Total
                exercises={[part1, part2, part3]}
            />
        </div>
    )
}

export default App;