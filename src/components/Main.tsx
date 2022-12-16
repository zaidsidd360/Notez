import React from 'react'
import styled from 'styled-components'

const Main = () => {
  const notes = [
    {
      id: 1,
      title: "NOTE 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 2,
      title: "NOTE 2",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 3,
      title: "NOTE 3",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 4,
      title: "NOTE 4",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 5,
      title: "NOTE 5",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 6,
      title: "NOTE 6",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 1,
      title: "NOTE 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 2,
      title: "NOTE 2",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 3,
      title: "NOTE 3",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 4,
      title: "NOTE 4",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 5,
      title: "NOTE 5",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 6,
      title: "NOTE 6",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 1,
      title: "NOTE 1",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 2,
      title: "NOTE 2",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 3,
      title: "NOTE 3",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 4,
      title: "NOTE 4",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 5,
      title: "NOTE 5",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    },
    {
      id: 6,
      title: "NOTE 6",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est autem quod, dolores eum perferendis excepturi aspernatur. Eum incidunt sed enim."
    }
  ]
  return (
    <>
    <MainContent >
    {
      notes.map((note) => {
        return (
          
            <Note key={note.id}>
            <h1>{note.title}</h1>
            <p>{note.body}</p>
            </Note>
          
        )
      })
    }
    </MainContent>
    </>
  )
}

const MainContent = styled.div`
  padding: 2em 4em;
	columns: 4;
	column-gap: 2rem;
  width: 100%;
`

const Note = styled.div`
  min-width: 300px;
	border: 1px solid #fff;
  color: #fff;
  display: flex;
	flex-direction: column;
	align-items: flex-start;
	row-gap: 1rem;
	max-height: 70rem;
	border-radius: 4px;
	padding: 1.2rem;
	position: relative;
	overflow: hidden;
	overflow-wrap: break-word;
	word-wrap: break-word;
	break-inside: avoid;
	margin-bottom: 2rem;
	cursor: pointer;
	transition: border 0.2s;
`

export default Main