var deleteDuplicates = function (head) {
  let current = head;
  let current1 = head?.next;
  while (current) {
    current1 = current.next;
    while (current1) {
      if (current.val === current1.val) {
        current.next = current1.next;
        
      } else {
        break;
      }
    }
    current = current.next;
  }
  return head;
};

// 1->1->2->3->3
// 1->2->3->3
