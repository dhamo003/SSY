import { CeoModule } from './ceo.module';

describe('CeoModule', () => {
  let ceoModule: CeoModule;

  beforeEach(() => {
    ceoModule = new CeoModule();
  });

  it('should create an instance', () => {
    expect(ceoModule).toBeTruthy();
  });
});
