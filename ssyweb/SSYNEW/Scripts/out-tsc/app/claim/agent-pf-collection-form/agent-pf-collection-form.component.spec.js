import { async, TestBed } from '@angular/core/testing';
import { AgentPfCollectionFormComponent } from './agent-pf-collection-form.component';
describe('AgentPfCollectionFormComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AgentPfCollectionFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AgentPfCollectionFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=agent-pf-collection-form.component.spec.js.map