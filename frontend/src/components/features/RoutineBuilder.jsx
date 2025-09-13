import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { FaPlus, FaTrash, FaArrowUp, FaArrowDown } from 'react-icons/fa'
import Button from '../common/Button'
import Input from '../common/Input'

const RoutineBuilder = () => {
  const [routineName, setRoutineName] = useState('')
  const [habits, setHabits] = useState([
    { id: '1', name: 'Morning Meditation', duration: 10 },
    { id: '2', name: 'Exercise', duration: 30 },
    { id: '3', name: 'Read a book', duration: 20 },
  ])
  const [newHabit, setNewHabit] = useState({ name: '', duration: 10 })

  const moveHabit = (index, direction) => {
    const newHabits = [...habits]
    if (direction === 'up' && index > 0) {
      [newHabits[index - 1], newHabits[index]] = [newHabits[index], newHabits[index - 1]]
    } else if (direction === 'down' && index < habits.length - 1) {
      [newHabits[index], newHabits[index + 1]] = [newHabits[index + 1], newHabits[index]]
    }
    setHabits(newHabits)
  }

  const addHabit = () => {
    if (newHabit.name.trim() === '') return
    setHabits([...habits, { ...newHabit, id: Date.now().toString() }])
    setNewHabit({ name: '', duration: 10 })
  }

  const removeHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id))
  }

  const totalDuration = habits.reduce((sum, habit) => sum + habit.duration, 0)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-dark mb-4">Create Routine</h3>
      
      <div className="mb-6">
        <Input
          label="Routine Name"
          placeholder="e.g. Morning Routine"
          value={routineName}
          onChange={(e) => setRoutineName(e.target.value)}
        />
      </div>
      
      <div className="mb-6">
        <h4 className="text-md font-medium text-dark mb-3">Add Habits</h4>
        <div className="flex space-x-2">
          <Input
            placeholder="Habit name"
            value={newHabit.name}
            onChange={(e) => setNewHabit({...newHabit, name: e.target.value})}
            className="flex-grow"
          />
          <Input
            type="number"
            placeholder="Duration (min)"
            value={newHabit.duration}
            onChange={(e) => setNewHabit({...newHabit, duration: parseInt(e.target.value) || 0})}
            className="w-24"
          />
          <Button variant="primary" onClick={addHabit}>
            <FaPlus />
          </Button>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-md font-medium text-dark mb-3">Routine Habits</h4>
        <DragDropContext onDragEnd={(result) => {
          if (!result.destination) return

          const items = Array.from(habits)
          const [reorderedItem] = items.splice(result.source.index, 1)
          items.splice(result.destination.index, 0, reorderedItem)

          setHabits(items)
        }}>
          <Droppable droppableId="habits">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {habits.map((habit, index) => (
                  <Draggable key={habit.id} draggableId={habit.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex items-center justify-between p-3 mb-2 bg-gray-50 rounded-md border border-gray-200"
                      >
                        <div className="flex items-center">
                          <div className="mr-3 text-gray-400">≡</div>
                          <div>
                            <div className="font-medium">{habit.name}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <FaClock className="mr-1" />
                              {habit.duration} min
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => moveHabit(index, 'up')}
                            disabled={index === 0}
                          >
                            <FaArrowUp />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => moveHabit(index, 'down')}
                            disabled={index === habits.length - 1}
                          >
                            <FaArrowDown />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => removeHabit(habit.id)}
                          >
                            <FaTrash className="text-red-500" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-lg font-medium">
          Total Duration: <span className="text-primary">{totalDuration} min</span>
        </div>
        <Button variant="primary">Save Routine</Button>
      </div>
    </div>
  )
}

export default RoutineBuilder