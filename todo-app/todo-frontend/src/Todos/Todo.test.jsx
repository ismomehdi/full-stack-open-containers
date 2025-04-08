import { render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { Todo } from './Todo'

it('renders correctly', () => {
    const todo = {
        _id: '1',
        text: 'Test Todo',
        done: false,
    }
    
    const onClickDelete = vi.fn()
    const onClickComplete = vi.fn()
    
    render(
        <Todo
        todo={todo}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
        />
    )
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument()
    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByText('Set as done')).toBeInTheDocument()
    expect(screen.getByText('Delete')).toBeInTheDocument()
})
