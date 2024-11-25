import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props = {
      prop1: 'value1',
      prop2: 15,
    };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity.id).not.toBeNull();
    expect(uuidValidate(entity.id)).toBeTruthy();
  });

  it('Should accept a valid id', () => {
    const props = {
      prop1: 'value1',
      prop2: 15,
    };
    const id = 'fc9c698d-0335-469d-bab3-062c66fb06a4';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity.id)).toBeTruthy();
    expect(entity.id).toEqual(id);
  });

  it('Should convert entity to Javascript Object', () => {
    const props = {
      prop1: 'value1',
      prop2: 15,
    };
    const id = 'fc9c698d-0335-469d-bab3-062c66fb06a4';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({ id, ...props });
  });
});
