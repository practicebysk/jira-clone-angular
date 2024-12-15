import { IssuePrioritySelectComponent } from '@kinarsardhara/project/components/add-issue-modal/issue-priority-select/issue-priority-select.component';
import { IssuePriority } from '@kinarsardhara/interface/issue';

describe('IssuePrioritySelectComponent', () => {
  let component: IssuePrioritySelectComponent;
  beforeEach(() => {
    component = new IssuePrioritySelectComponent();
  });

  it('should be able to get Priority Icon', () => {
    const expectedIcon = component.getPriorityIcon(IssuePriority.LOW);
    expect(expectedIcon.value).toEqual('Low');
    expect(expectedIcon.icon).toEqual('arrow-down');
    expect(expectedIcon.color).toEqual('#2D8738');
  });
});
