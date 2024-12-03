import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data.builder';
import {
  UserRules,
  UserValidator,
  UserValidatorFactory,
} from '../../user.validator';

let sut: UserValidator;

describe('ClassValidatorFields integration tests', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create();
  });

  it('Valid case for user validator class', () => {
    const props = UserDataBuilder({});
    const isValid = sut.validate(props);
    expect(isValid).toBeTruthy();
    expect(sut.validatedData).toStrictEqual(new UserRules(props));
  });

  describe('Name field', () => {
    it('Invalidation cases for name field', () => {
      let isValid = sut.validate(null as any);
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual([
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate(
        UserDataBuilder({ ...UserDataBuilder({}), name: '' as any }),
      );
      expect(isValid).toBeFalsy();
      console.log(sut.errors['name']);
      expect(sut.errors['name']).toStrictEqual(['name should not be empty']);

      isValid = sut.validate(
        UserDataBuilder({ ...UserDataBuilder({}), name: 10 as any }),
      );
      expect(isValid).toBeFalsy();
      console.log(sut.errors['name']);
      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validate(
        UserDataBuilder({ ...UserDataBuilder({}), name: 'a'.repeat(256) }),
      );
      expect(isValid).toBeFalsy();
      console.log(sut.errors['name']);
      expect(sut.errors['name']).toStrictEqual([
        'name must be shorter than or equal to 255 characters',
      ]);
    });
  });

  describe('password field', () => {
    it('Invalidation cases for password field', () => {
      let isValid = sut.validate(null as any);
      expect(isValid).toBeFalsy();
      expect(sut.errors['password']).toStrictEqual([
        'password should not be empty',
        'password must be a string',
        'password must be shorter than or equal to 100 characters',
      ]);

      isValid = sut.validate(
        UserDataBuilder({ ...UserDataBuilder({}), email: '' as any }),
      );
      expect(isValid).toBeFalsy();
      console.log(sut.errors['email']);
      expect(sut.errors['email']).toStrictEqual([
        'email should not be empty',
        'email must be an email',
      ]);

      isValid = sut.validate(
        UserDataBuilder({
          ...UserDataBuilder({}),
          email: 'wrongmail.com' as any,
        }),
      );
      expect(isValid).toBeFalsy();
      console.log(sut.errors['email']);
      expect(sut.errors['email']).toStrictEqual(['email must be an email']);

      isValid = sut.validate(
        UserDataBuilder({ ...UserDataBuilder({}), email: 'a'.repeat(256) }),
      );
      expect(isValid).toBeFalsy();
      console.log(sut.errors['email']);
      expect(sut.errors['email']).toStrictEqual([
        'email must be an email',
        'email must be shorter than or equal to 255 characters',
      ]);
    });
  });
  describe('Password field', () => {
    it('Invalidation cases for Password field', () => {
      let isValid = sut.validate(null as any);
      expect(isValid).toBeFalsy();
      expect(sut.errors['password']).toStrictEqual([
        'password should not be empty',
        'password must be a string',
        'password must be shorter than or equal to 100 characters',
      ]);

      isValid = sut.validate(
        UserDataBuilder({ ...UserDataBuilder({}), password: '' as any }),
      );
      expect(isValid).toBeFalsy();
      console.log(sut.errors['password']);
      expect(sut.errors['password']).toStrictEqual([
        'password should not be empty',
      ]);

      isValid = sut.validate(
        UserDataBuilder({
          ...UserDataBuilder({}),
          password: 10 as any,
        }),
      );
      expect(isValid).toBeFalsy();
      console.log(sut.errors['password']);
      expect(sut.errors['password']).toStrictEqual([
        'password must be a string',
        'password must be shorter than or equal to 100 characters',
      ]);

      isValid = sut.validate(
        UserDataBuilder({ ...UserDataBuilder({}), password: 'a'.repeat(101) }),
      );
      expect(isValid).toBeFalsy();
      console.log(sut.errors['password']);
      expect(sut.errors['password']).toStrictEqual([
        'password must be shorter than or equal to 100 characters',
      ]);
    });
  });
});
