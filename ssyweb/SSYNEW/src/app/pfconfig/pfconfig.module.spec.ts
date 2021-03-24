import { PfconfigModule } from './pfconfig.module';

describe('PfconfigModule', () => {
  let pfconfigModule: PfconfigModule;

  beforeEach(() => {
    pfconfigModule = new PfconfigModule();
  });

  it('should create an instance', () => {
    expect(pfconfigModule).toBeTruthy();
  });
});
