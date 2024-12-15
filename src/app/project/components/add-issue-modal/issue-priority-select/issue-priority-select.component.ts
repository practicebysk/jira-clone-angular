import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IssuePriorityIcon } from '@kinarsardhara/interface/issue-priority-icon';
import { IssueUtil } from '@kinarsardhara/project/utils/issue';
import { IssuePriority } from '@kinarsardhara/interface/issue';
import { ProjectConst } from '@kinarsardhara/project/config/const';

@Component({
  selector: 'issue-priority-select',
  templateUrl: './issue-priority-select.component.html',
  styleUrls: ['./issue-priority-select.component.scss']
})
export class IssuePrioritySelectComponent {
  @Input() control: FormControl;
  priorities: IssuePriorityIcon[];

  constructor() {
    this.priorities = ProjectConst.PrioritiesWithIcon;
  }

  getPriorityIcon(priority: IssuePriority) {
    return IssueUtil.getIssuePriorityIcon(priority);
  }
}
