using System;

public class SelectionSort
{
	public static void Main(string[] args)
	{
		int[] nums = new int[10] { 33, 10, 392, 341, 191, 24, 12, 111, 9, 1 };
	  int n = 10;
		int temp;
		int smallest;
		Console.WriteLine("Original nums:");
	  foreach (int num in nums)
	  {
		  Console.WriteLine(num);
		}
		for (int i = 0; i < n - 1; i++)
		{
		  smallest = i;
		  for (int j = i + 1; j < n; j++)
		  {
			  if (nums[j] < nums[smallest])
				{
				  smallest = j;
				}
				temp = nums[smallest];
			  nums[smallest] = nums[i];
				nums[i] = temp;
			}
			}
			Console.WriteLine("Sorted nums:");
			foreach (int num in nums)
			{
			  Console.WriteLine(num);
			}
	}
}

