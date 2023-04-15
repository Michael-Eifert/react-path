import { generateId } from '../../modules/idGenerator'

describe('idGenerator', () => {
  it('should generate a unique ID of 10 characters', () => {
    const id1 = generateId()
    const id2 = generateId()

    expect(id1).toHaveLength(10)
    expect(id2).toHaveLength(10)
    expect(id1).not.toEqual(id2)
  })
})
