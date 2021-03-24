import { async, TestBed } from '@angular/core/testing';
import { AgentClaimEntryComponent } from './agent-claim-entry.component';
describe('AgentClaimEntryComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AgentClaimEntryComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AgentClaimEntryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=agent-claim-entry.component.spec.js.map