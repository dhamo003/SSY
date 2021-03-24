import { DlcModule } from './dlc.module';

describe('DlcModule', () => {
  let dlcModule: DlcModule;

  beforeEach(() => {
    dlcModule = new DlcModule();
  });

  it('should create an instance', () => {
    expect(dlcModule).toBeTruthy();
  });
});
