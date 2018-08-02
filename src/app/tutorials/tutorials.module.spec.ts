import { TutorialsModule } from './tutorials.module';

describe('Module', () => {
  let Module: TutorialsModule;

  beforeEach(() => {
    Module = new TutorialsModule();
  });

  it('should create an instance', () => {
    expect(Module).toBeTruthy();
  });
});
