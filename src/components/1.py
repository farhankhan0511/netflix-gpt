# def generate_primes(n):
#         primes = []
#         for num in range(2, n + 1):
#             is_prime = True
#             for i in range(2, int(num ** 0.5) + 1):
#                 if num % i == 0:
#                     is_prime = False
#                     break
#             if is_prime:
#                 primes.append(num)
#         return primes

# def ans(arr):
#         for i in range(1, len(arr)):
#             if arr[i] <= arr[i - 1]:
#                 return False
#         return True

   
# def primeSubOperation(nums) -> bool:
#         for x in range(len(nums)-1):
#             prime=generate_primes(nums[x])
#             i=0
#             j=len(prime)-1
#             pr=None
#             while i<=j:
#                 mid=(i+j)//2
#                 val=nums[x]-prime[mid]
#                 if  val>0 and val<nums[x+1] and (val>nums[x-1] if x>0 else True) :
#                     pr=prime[mid]
#                     i=mid+1
#                 elif prime[mid]<nums[x]:
#                      i=mid+1   
#                 elif prime[mid]>nums[x]:
#                     j=mid-1
                
#                 else:
#                     i+=1
#             if pr:
#                 nums[x]-=pr
#             if ans(nums):
#                 return True
           
#         return False     
                    
            
                    
# print(primeSubOperation([5,16,14,9]))
def countFairPairs(nums, lower: int, upper: int) -> int:
        nums.sort()
        count = 0

        # Use two-pointer approach to count valid pairs
        for i in range(len(nums)):
            left, right = i + 1, len(nums) - 1

            # Binary search for the smallest index where nums[i] + nums[left] >= lower
            while left <= right:
                mid = (left + right) // 2
                if nums[i] + nums[mid] < lower:
                    left = mid + 1
                else:
                    right = mid - 1
            min_index = left

            # Binary search for the largest index where nums[i] + nums[right] <= upper
            left, right = i + 1, len(nums) - 1
            while left <= right:
                mid = (left + right) // 2
                if nums[i] + nums[mid] > upper:
                    right = mid - 1
                else:
                    left = mid + 1
            max_index = right

            # Count valid pairs in the range
            count += max(0, max_index - min_index + 1)

        return count

print(countFairPairs(nums = [0,1,7,4,4,5], lower = 3, upper = 6))