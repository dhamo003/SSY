import { async, TestBed } from '@angular/core/testing';
import { AgentPfDepositedListComponent } from './agent-pf-deposited-list.component';
describe('AgentPfDepositedListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AgentPfDepositedListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AgentPfDepositedListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=agent-pf-deposited-list.component.spec.js.map