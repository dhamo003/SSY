import { async, TestBed } from '@angular/core/testing';
import { AgentPfDepositComponent } from './agent-pf-deposit.component';
describe('AgentPfDepositComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AgentPfDepositComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AgentPfDepositComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=agent-pf-deposit.component.spec.js.map