import { AlcModule } from './alc.module';

describe('AlcModule', () => {
  let alcModule: AlcModule;

  beforeEach(() => {
    alcModule = new AlcModule();
  });

  it('should create an instance', () => {
    expect(alcModule).toBeTruthy();
  });
});
